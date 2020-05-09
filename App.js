/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * Theja_Rasajalee 
 * App_Creation
 * React_Native
 */

import React, { Component } from 'react';
import {
  
  StyleSheet,
   View,
    Text,
    Button,
    TouchableOpacity
  } from 'react-native';

export default class App extends Component {
constructor() {
  super()
  this.state ={
    resultText: "",
    calculationtText: ""
  }
  this.operations = ['DEL','+','-',"*",'/']
}
calculationtResult(){
  const text = this.state.resultText
  console.log(text, eval(text))
  this.setState({
    calculationtText: eval(text)

  })

}

validate() {
  const text = this.state.resultText
  switch(text.slice(-1)){
    case'+':
      case'-':
      case'*':
      case'/':
      return false
  }
  return true
}


buttonPressed(text){
console.log(text)

if(text=='='){
  return this.validate() && this.calculationtResult(this.state.resultText)
}




this.setState({
  resultText: this.state.resultText+text
})

}

operate(operations){
  switch(operations){
    case 'DEL':
      let text = this.state.resultText.split('')
      text.pop()
      
      this.setState({
        resultText: text.join('')
      })
      break
      case'+':
      case'-':
      case'*':
      case'/':
      const lastChar = this.state.resultText.split('').pop()


if(this.operations.indexOf(lastChar)  >0 ) return


      if(this.state.text=="" ) return
      this.setState({
        resultText: this.state.resultText + operations
      })
  }
}



render()
{
  let rows =[]
  let nums =[[1,2,3], [4,5,6],[7,8,9],['.',0,'=']]
  for(let i = 0; i<4; i++){
    let row = []
    for(let j = 0 ; j<3; j++){
      row.push(<TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])} style={styles.btn}><Text style={styles.btntext}>{nums[i][j]}</Text></TouchableOpacity>)
      
    }

    rows.push(<View style={styles.row}>{row}</View>)
  }

  let operations = ['DEL','+','-','*','/']
  let ops = []
  for(let i=0; i<5; i++)
{
  ops.push(<TouchableOpacity style={styles.btn} onPress={()=> this.operate(this.operations[i])}><Text style={styles.btntext , styles.white}>{this.operations[i]}</Text></TouchableOpacity>)
}
  return(
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{this.state.resultText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationtText}>{this.state.calculationtText}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
        
            {rows}
          </View>
        <View style={styles.operations}>
              {ops}

        </View>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  white: {
    color: '#ede7f6',
    fontSize: 25,
  },
  btntext: {
    fontSize: 30,
    color: '#1a237e'
  },
resultText: {
  color: '#455a64',
    fontSize: 40,
},
btn: {
  flex: 1,
  alignItems: 'center',
  alignSelf: 'stretch',
  justifyContent: 'center',
},

  calculationtText: {
fontSize: 35,
color: '#8d6e63',
  },

  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  result: {
          flex: 2,
      backgroundColor: '#e0f7fa',
      alignItems: 'flex-end',
      justifyContent: 'center',

    },
  calculation: {
    flex: 1,
    backgroundColor: '#b2ebf2',
    alignItems: 'flex-end',
    
  },
  buttons:{
    flex: 7,
    flexDirection: "row",
  },
  numbers: {
    flex: 3,
    backgroundColor: '#80deea'

  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#0097a7',
    
  },

})