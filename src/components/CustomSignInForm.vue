<template>
          <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">SignIn</p>
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

                        <b-checkbox>Remember me</b-checkbox> </br>

                         <p class="text-center">or sign in with </p>

                        <button @click="signInWithGoogle" class="btn btn-light">
                            <img height="30" width="30" src="../assets/google.png" />
                        </button>

                    </section>
                    <footer class="modal-card-foot">
                        <b-button
                            label="Close"
                            @click="$emit('close')" />
                        <b-button
                            @click="signIn"
                            label="Sign in"
                            type="is-primary" />
                    </footer>
                </div>
            </form>
</template>

<script>
import {db , auth} from '../firebase'
import firebase from 'firebase';

    export default {
        props: ['email', 'password'],
        methods: {
            signIn(e){
                alert(e)
                 e.preventDefault();

            // auth
            // .createUserWithEmailAndPassword(this.email, this.password)
            // .then((auth) => {
            //     // it successfully created a new user with email and password
            //     if (auth) {
            //     alert("success"+ auth.user.email)
            //     console.log(auth)

            //     }
            // })
            // .catch((error) => alert(error.message));
            },
            signInWithGoogle(e){
                alert("Sign in with google")
               


            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>