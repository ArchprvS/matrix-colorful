<script>
  import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
  import { setGlobalOptions } from 'svelte-scrolling';
  let name = $state('');
  let surname = $state('');
  let email = $state('');
  let subject = $state('');
  let message = $state('');
  let status = $state('');

  async function handleSubmit() {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, surname, email, subject, message, status})
      });

      if (response.ok) {
        status = 'Wiadomość wysłana pomyślnie!';
        name = '';
        surname = '';
        email = '';
        subject = '';
        message = '';
      } else {
        status = 'Błąd podczas wysyłania wiadomości.';
      }
    } catch (error) {
  status = 'Wystąpił błąd. Spróbuj ponownie później.'
}
  }
</script>

<section id="con_sec" class="contact-form-section">
  <h2>Cześć {name}! <br>Napisz do nas!</h2>
  <form class="contact-form" on:submit|preventDefault={handleSubmit}>
    <div class="form-row">
      <input type="text" name="name" placeholder="Imię" bind:value={name} required />
    </div>
    <div class="form-row">
      <input type="text" name="surname" placeholder="Nazwisko" bind:value={surname} required />
    </div>
    <div class="form-row">
      <input type="email" name="email" placeholder="Adres e-mail" bind:value={email} required />
    </div>
    <div class="form-row">
      <input type="text" name="subject" placeholder="Temat" bind:value={subject} />
    </div>
    <div class="form-row">
      <textarea name="message" rows="5" placeholder="Wiadomość" bind:value={message} required></textarea>
    </div>
    <div class="form-row">
      <button type="submit">Wyślij wiadomość</button>
    </div>
  </form>
  {#if status}
    <p>{status}</p>
  {/if}
</section>

<style>
  .contact-form-section {
    width: 100%;
    max-width: 1100px;
    margin: 8vh auto 4vh auto;
    padding: 4vh 2vw;
    background: rgba(245, 245, 245, 0.5);
    border: 1px solid rgb(245, 245, 245);
    border-radius: 2vw;
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10);
    z-index: 2;
    position: relative;
    backdrop-filter: blur(1.5px);
  }
  .contact-form-section h2 {
    color: #232323;
    font-family: "Rajdhani", "Segoe UI", Arial, sans-serif;
    font-size: clamp(2rem, 4vw, 2.2rem);
    text-align: center;
    margin-bottom: 3vh;
    letter-spacing: 0.04em;
    text-shadow: 0 2px 16px #fff8;
    font-weight: 700;
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 2vh;
  }
  .form-row {
    display: flex;
    flex-direction: column;
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
    transition: all 0.2s;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0 2px 12px #0001;
  }
  .contact-form button:hover {
    background: #232323;
    color: #fff;
    border: 2px solid #232323;
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