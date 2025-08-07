<script>
  import { onMount } from 'svelte';
  import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
  import { setGlobalOptions } from 'svelte-scrolling';

  let name = $state('');
  let surname = $state('');
  let email = $state('');
  let subject = $state('');
  let message = $state('');
  let status = $state('');
  let sectionVisible = $state(false);
  let statusVisible = $state(false);
  let isSectionAnimated = $state(false);

  async function handleSubmit() {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, surname, email, subject, message })
      });

      if (response.ok) {
        status = 'Wiadomość wysłana pomyślnie!';
        statusVisible = true;
        name = '';
        surname = '';
        email = '';
        subject = '';
        message = '';
        setTimeout(() => {
          statusVisible = false;
          status = '';
        }, 5000); // Reset statusu po 5 sekundach
      } else {
        status = 'Błąd podczas wysyłania wiadomości.';
        statusVisible = true;
        setTimeout(() => {
          statusVisible = false;
          status = '';
        }, 5000);
      }
    } catch (error) {
      status = 'Wystąpił błąd. Spróbuj ponownie później.';
      statusVisible = true;
      setTimeout(() => {
        statusVisible = false;
        status = '';
      }, 5000);
    }
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isSectionAnimated) {
            sectionVisible = true;
            isSectionAnimated = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('#con_sec');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });
</script>

<section id="con_sec" class="contact-form-section" class:visible={sectionVisible}>
  <h2 class="section-title" class:animate-title={sectionVisible}>
    Witaj {name || 'Przybyszu'}! <br>Napisz do nas!
  </h2>
  <form class="contact-form" on:submit|preventDefault={handleSubmit}>
    <div class="form-row" class:visible={sectionVisible} style="--delay: {0 * 0.15}s;">
      <input type="text" name="name" placeholder="Imię" bind:value={name} required />
    </div>
    <div class="form-row" class:visible={sectionVisible} style="--delay: {1 * 0.15}s;">
      <input type="text" name="surname" placeholder="Nazwisko" bind:value={surname} required />
    </div>
    <div class="form-row" class:visible={sectionVisible} style="--delay: {2 * 0.15}s;">
      <input type="email" name="email" placeholder="Adres e-mail" bind:value={email} required />
    </div>
    <div class="form-row" class:visible={sectionVisible} style="--delay: {3 * 0.15}s;">
      <input type="text" name="subject" placeholder="Temat" bind:value={subject} />
    </div>
    <div class="form-row" class:visible={sectionVisible} style="--delay: {4 * 0.15}s;">
      <textarea name="message" rows="5" placeholder="Wiadomość" bind:value={message} required></textarea>
    </div>
    <div class="form-row" class:visible={sectionVisible} style="--delay: {5 * 0.15}s;">
      <button type="submit">Wyślij wiadomość</button>
    </div>
  </form>
  <p class="status" class:visible={statusVisible} style="--delay: 0.2s;">{status}</p>
</section>

<style>
  .contact-form-section {
    width: 100%;
    max-width: 1100px;
    margin: 8vh auto 4vh auto;
    padding: 4vh 2vw;
    background: rgba(245, 245, 245, 0.1);
    border: 1px solid rgb(245, 245, 245);
    border-radius: 1vw;
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10);
    z-index: 2;
    position: relative;
    backdrop-filter: blur(3);
    opacity: 0;
    transform: translateY(30px);
    animation: sectionEntrance 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .contact-form-section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes sectionEntrance {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .section-title {
    color: #e7e7e7;
    font-family: "Rajdhani", "Segoe UI", Arial, sans-serif;
    font-size: clamp(2rem, 4vw, 2.2rem);
    text-align: center;
    margin-bottom: 3vh;
    letter-spacing: 0.04em;
    text-shadow: 0 2px 16px #fff8;
    font-weight: 700;
    opacity: 0;
    transform: translateY(30px);
    animation: titleEntrance 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .section-title.animate-title {
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes titleEntrance {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 2vh;
  }

  .form-row {
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateY(60px) rotateX(15deg);
    animation-fill-mode: forwards;
  }

  .form-row.visible {
    animation: formRowEntrance 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: var(--delay, 0s);
  }

  @keyframes formRowEntrance {
    0% {
      opacity: 0;
      transform: translateY(60px) rotateX(15deg) scale(0.9);
    }
    100% {
      opacity: 1;
      transform: translateY(0) rotateX(0deg) scale(1);
    }
  }

  .contact-form input,
  .contact-form textarea {
    font-family: "Rajdhani", "Segoe UI", Arial, sans-serif;
    font-size: 1.1rem;
    padding: 12px 18px;
    border: 2px solid #000000bf;
    border-radius: 1em;
    background: rgba(255,255,255,0.85);
    color: #232323;
    box-shadow: 0 2px 12px #0001;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    resize: none;
  }

  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: #d72679c3;
    box-shadow: 0 4px 16px #000000f5;
  }

  .contact-form button {
    align-self: center;
    padding: 10px 32px;
    border: 2px solid #232323;
    background: #fff;
    font-family: "Rajdhani";
    font-weight: 500;
    font-size: 20px;
    color: #232323;
    transition: background 0.2s, color 0.2s, border 0.2s;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0 2px 12px #0001;
  }

  .contact-form button:hover {
    background: #232323;
    color: #fff;
    border: 2px solid #232323;
  }

  .status {
    text-align: center;
    font-family: "Rajdhani", "Segoe UI", Arial, sans-serif;
    font-size: 1rem;
    color: #232323;
    margin-top: 2vh;
    opacity: 0;
    transform: translateY(60px) rotateX(15deg);
    animation-fill-mode: forwards;
  }

  .status.visible {
    animation: formRowEntrance 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: var(--delay, 0s);
  }

  @media (max-width: 700px) {
    .contact-form-section {
      max-width: 98vw;
      padding: 4vw 2vw;
    }

    .contact-form button {
      width: 100%;
    }
  }
</style>