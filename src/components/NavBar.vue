<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">

            <router-link  to='/'>
                 <img
                    src="../assets/jeep.png"
                    alt="Logo"
                >
                
                <span class="d-none  d-lg-inline">RoadTrip</span>
                 </router-link>
               
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#">    
                <router-link to='/'> Home</router-link>
            </b-navbar-item>

             <b-navbar-item href="#">    
                <router-link to='/recap'> Trip Recap</router-link>
            </b-navbar-item>
            
        </template>

        <template #end>
            <div>
                 <b-navbar-item tag="div">
                <div class="buttons">
                    <ModulableModal 
                    :contentComponent="CustomLoginForm" 
                    buttonTitle="Login" 
                    buttonColor="is-light" 
                    buttonSize="is-medium"> </ModulableModal>

                    <ModulableModal 
                    :contentComponent="CustomSignInForm" 
                    buttonTitle="Sign up" 
                    buttonColor="is-primary"
                    buttonSize="is-medium" 
                    buttonClasses="mx-1"> </ModulableModal>

                </div>
            </b-navbar-item> 
            </div>
           
        </template>
    </b-navbar>
</template>



<script>
import ModulableModal from './ModulableModal'
import CustomLoginForm from './CustomLoginForm'
import CustomSignInForm from './CustomSignInForm'
// import ModalLoginForm from './ModalLoginForm'
export default {
  name: 'NavBar',
  props: {
    // msg: String
  },
  data(){
      return {
          CustomLoginForm,
          CustomSignInForm
      }
  },
  components: {
    ModulableModal,
    CustomLoginForm
  },
  async mounted(){


  }
}
</script>