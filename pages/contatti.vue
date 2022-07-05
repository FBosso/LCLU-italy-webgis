<template>
  <div class="container mt-5">
    <div class="row mb-3">
      <TopPageGeneric
        :name="topData.name"
        :description="topData.description"
        :tags="topData.tags"
      />
      <div class="row mt-5">
        <div class="col-xxl-3">
          <div class="">
            <div class="col-xxl-3 center">
              <img
                class="foto"
                src="https://i.ibb.co/xFXswzP/io-resized.webp"
                alt="Francesco Bosso"
              />
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-xxl" style="padding-right: 0px">
              <div class="contacts mt-3 mb-3">
                <span class="general-contact">Nome</span> <br />
                Francesco <br />
                <hr />
                <span class="general-contact">Cognome</span> <br />
                Bosso <br />
                <hr />
                <span class="general-contact">Telefono</span> <br />
                +39 3469601901 <br />
                <hr />
                <span class="general-contact">Linkedin</span> <br />
                <a href="https://www.linkedin.com/in/francesco-bosso-614814130/"
                  >Francesco Bosso<img
                    height="20px"
                    src="https://i.ibb.co/423RsxD/redirect.png"
                    alt="redirect"
                    class="invert"
                /></a>
                <br />
                <hr />
                <span class="general-contact">Mail</span> <br />
                francesco.bosso@mail.polimi.it
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-9" style="padding-right: 0px">
          <div class="info"></div>

          <div class="form">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContattiPage',
  head() {
    return {
      title: 'LC LU Italia | Contatti',
      meta: [
        {
          hid: 'descriptionContatti',
          name: 'description',
          content: `Contatti dello sviluppatore in caso di supporto o problematiche riscontrate a livello di applicazione web. Oltre ai contatti personali è fornito un form che consente di porre questioni senza uscire dal sito web`,
        },
        {
          hid: 'keywordsContatti',
          name: 'keywords',
          content: [
            'contatti',
            'Francesco',
            'Bosso',
            'telefono',
            'linkedin',
            'mail',
            'form',
          ],
        },
      ],
    }
  },
  data() {
    return {
      topData: {
        name: 'Contatti',
        description:
          "In questa sezione sono presenti i dati dello studente che ha sviluppato il progetto ed i relativi contatti. Inoltre, un form è messo a disposizione degli utenti per ricevere assistenza a fronte di eventuali dubbi riscontrati durante l'uso dell'applicazione web",
        tags: ['Mail', 'Phone', 'Linkedin', 'Form'],
      },
    }
  },
}
</script>

<style scoped>
.foto {
  border-radius: 10px;
  height: 410px;
}
.general-contact {
  font-size: 20px;
  font-weight: 600;
}
.contacts {
  background: rgb(128, 60, 65);
  border-radius: 10px;
  text-align: center;
  padding: 15px;
  color: white;
}
a {
  color: rgb(251, 237, 167);
  text-decoration: none;
}
.bodyicons {
  background: gray;
  border-radius: 10px;
}
@media screen and (max-width: 767px) {
  .center {
    text-align: center;
  }
}
.invert{
  filter: invert();
}
</style>