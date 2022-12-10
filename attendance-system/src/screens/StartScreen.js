import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Login As</Header>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('StudentLogin')}
      >
        Student
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('TeacherLogin')}
      >
        Teacher
      </Button>
    </Background>
  )
}
