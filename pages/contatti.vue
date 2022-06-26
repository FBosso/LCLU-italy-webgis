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
          <div class="mb-2">
            <div class="col-xxl-3 center">
              <img
                class="foto"
                src="https://i.ibb.co/gjv7jBk/foto.webp"
                alt="Francesco Bosso"
              />
            </div>
           
          </div>
          <div class="row mb-2">
            <div class="col-xxl" style="padding-right:0px;">
              <div class="contacts mt-3 mb-3">
                <span class="general-contact">Nome</span> <br> Francesco
                <br /><hr>
                <span class="general-contact">Cognome</span> <br> Bosso
                <br /><hr>
                <span class="general-contact">Telefono</span> <br> +39 3469601901
                <br /><hr>
                <span class="general-contact">Linkedin</span> <br>
                <a href="https://www.linkedin.com/in/francesco-bosso-614814130/"
                  >Francesco Bosso</a>
                <br /><hr>
                <span class="general-contact">Mail</span> <br>
                francesco.bosso@mail.polimi.it
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-9" style="padding-right: 0px;">
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
  data() {
    return {
      topData: {
        name: 'Contatti',
        description:
          'In questa sezione sono presenti i dati dello studente che ha sviluppato il progetto ed i relativi contatti. Inoltre, un form è messo a disposizione degli utenti per ricevere assistenza a fronte di eventuali dubbi riscontrati durante l\'uso dell\'applicazione web',
        tags: ['Mail', 'Phone', 'Linkedin', 'Form'],
      },
    }
  },
}
</script>

<style scoped>
.foto {
  border-radius: 10px;
  height: 305px;
}
.general-contact {
  font-size: 20px;
  font-weight: 600;
}
.contacts {
  background: rgb(222, 222, 222);
  border-radius: 10px;
  text-align: center;
  padding: 15px;
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
</style>