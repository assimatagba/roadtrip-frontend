<template>
          <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                        <button
                            type="button"
                            class="delete"
                            @click="$emit('close')"/>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Email">
                            <b-input
                                type="email"
                                :value="email"
                                placeholder="Your email"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                :value="password"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </b-input>
                        </b-field>

                        <b-checkbox>Remember me</b-checkbox> <br />

                        <p class="text-center">or login with </p>

                        <button @click="loginWithGoogle" class="btn btn-light">
                            <img height="30" width="30" src="../assets/google.png" />
                        </button>


                    </section>
                    <footer class="modal-card-foot">
                        <b-button
                            label="Close"
                            @click="$emit('close')" />
                        <b-button
                            @click="login"
                            label="Login"
                            type="is-primary" />
                    </footer>
                </div>
            </form>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import {db , auth} from '../firebase'
import firebase from 'firebase';
    export default {
        props: [],
         data(){
    return {
      email:"richard.bathiebo.7@gmail.com",
      password: "test"
    }
  },
        methods: {
            login(e){
                 e.preventDefault();

    auth
      .signInWithEmailAndPassword(this.email, this.password)
      .then((auth) => {
        // message.success('Success !');
        // navigate('/');
        alert("success"+auth.user.email)
        console.log(auth)

      })
      .catch((error) => alert(error.message));
            },
            loginWithGoogle(e){
                alert("Login With google")

                 e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider()

    auth.signInWithPopup(googleProvider).then((res) => {
      // console.log(res.user)

      alert(`Bienvenue ${res.user.displayName}  - ${res.user.email}`)
    }).catch((error) => {
      console.log(error.message)
      alert("Erreur")
    })

            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>