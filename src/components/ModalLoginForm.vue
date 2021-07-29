<template>
    <div>

         <section>
        <div class="buttons">
            <b-button
                label="Launch card modal (Component)"
                type="is-primary"
                size="is-medium"
                @click="cardModal" />
        </div>
    </section>

    
    </div>
</template>

<script>
import CustomLoginForm from './CustomLoginForm'
    export default {
        methods : {
            cardModal() {
                this.$buefy.modal.open({
                    parent: this,
                    component: CustomLoginForm,
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