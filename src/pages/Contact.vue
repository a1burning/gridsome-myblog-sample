<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('/img/contact-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="page-heading">
              <h1>Contact Me</h1>
              <span class="subheading">Have questions? I have answers.</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
          <!-- Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. -->
          <!-- WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! -->
          <!-- To use the contact form, your site must be on a live web host with PHP! The form will not work locally! -->
          <form name="sentMessage" id="contactForm" @submit.prevent="onSubmit">
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Name</label>
                <input type="text" class="form-control" placeholder="Name" id="name" required 
                v-model="form.name"
                data-validation-required-message="Please enter your name.">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Email Address</label>
                <input type="email" class="form-control" placeholder="Email Address" id="email"
                v-model="form.email"
                data-validation-required-message="Please enter your email address.">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group col-xs-12 floating-label-form-group controls">
                <label>Phone Number</label>
                <input type="tel" class="form-control" placeholder="Phone Number" id="phone"
                v-model="form.phone"
                data-validation-required-message="Please enter your phone number.">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Message</label>
                <textarea rows="5" class="form-control" placeholder="Message" id="message"
                v-model="form.message"
                data-validation-required-message="Please enter a message."></textarea>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <br>
            <!-- alert -->
            <div class="alert alert-success" v-show="success" role="alert">
              Send Success!
            </div>
            <div v-show="err"> 
              <div class="alert alert-danger" role="alert" v-for="(value, key) in errorArr" :key="key">
              Err: {{ key + ' : ' + value}}
              </div>
            </div>
            <button type="submit" class="btn btn-primary" id="sendMessageButton">Send</button>
          </form>
        </div>
      </div>
    </div>

    
  </Layout>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ContactPage',
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      success: false,
      err: false,
      errorArr: {}
    }
  },
  methods: {
    async onSubmit () {
      try {
        const { data } = await axios({
          method: 'POST',
          url: this.GRIDSOME_API_URL + '/contacts',
          data: this.form
        })
        this.showAlert(true)
        this.resetFrom()
      } catch (err) {
        this.errorArr = err.response.data.data.errors
        this.showAlert(false)
      }
    },
    // 重置表单
    resetFrom () {
      this.form = {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    },
    // 显示提示框
    showAlert(isSucc){
      const sucStr = isSucc ? 'success': 'err'
      this[sucStr] = true
      setTimeout(() => {
        this[sucStr] = false
      },3000)
    }
  }
}
</script>

<style>

</style>