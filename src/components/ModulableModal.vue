<template>
    <div>

         <section>
        <div class="buttons">
            <b-button
            :class="buttonClasses"
                :label="buttonTitle"
                :type="buttonColor"
                :size="buttonSize"
                @click="cardModal" />
        </div>
    </section>

    
    </div>
</template>

<script>
import CustomLoginForm from './CustomLoginForm'
import 'bootstrap/dist/css/bootstrap.min.css'
    export default {
        props: ["contentComponent","buttonTitle", "buttonColor","buttonSize","buttonClasses"],
        methods : {
            cardModal() {
                this.$buefy.modal.open({
                    parent: this,
                    component: this.contentComponent,
                    hasModalCard: true,
                    customClass: 'custom-class custom-class-2',
                    trapFocus: true
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>