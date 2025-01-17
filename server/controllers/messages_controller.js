let messages = []
let id = 0

module.exports = {

    read: (req, res) =>{
        res.status(200).send(messages)
    },
    create: (req, res) =>{
        messages.push({
            id: id,
            text: req.body.text,
            time: req.body.time
        })
        id++
        res.status(200).send(messages)
    },
        update: (req, res) => {
        const {id} = req.params
        let messageIndex = 0
        messages.map((element, i) => {
            if(element.id === +id){
                messageIndex = i
            }
        })
        updateMessage = {
            id: +id,
            text: req.body.text,
            time: req.body.time
        }
        messages.splice(messageIndex, 1, updateMessage)
        res.status(200).send(messages)
         },
    
    delete: (req, res) => {
        const {id} = req.params
        let index2 = 0

        messages.map((element, i) => {
            if(element.id === +id){
                index2 = i
            }
        })

        messages.splice(index2, 1)
        res.status(200).send(messages)
    }

}

// // update: (req, res) => {
//     //     const {id} = req.params
//     //     let index = null
        
//     //     messages.map((element, i) => {
//     //         if(element.id == +id){
//     //             index = i
//     //         }
//     //     })
//     //     let newMessage =  {
//     //         id : +id,
//     //         text: req.body.text,
//     //         time: req.body.time
//     //     }

//     //     messages.splice(index, 1, newMessage)
//     //     res.status(200).send(messages)

//     // },


// let messages = []
// let id  = 0

// module.exports = {

//     read: (req, res) => {
//         res.status(200).send(messages)
//     },
//     create: (req, res) => {
        
//         messages.push({
//             id: id,
//             text : req.body.text,
//             time: req.body.time
//         })
//         id++

//         res.status(200).send(messages)
//     },
//     update: (req, res) => {
//         const {id} = req.params
//         let messageIndex = null
//         messages.forEach((element, i) => {
//             if(element.id == id){
//                 messageIndex = i
//             }
//         })
//         updateMessage = {
//             id: +id,
//             text: req.body.text,
//             time: req.body.time
//         }
//         messages.splice(messageIndex, 1, updateMessage)
//         res.status(200).send(messages)

//     },
//     delete: (req, res) => {
//         const {id} = req.params
//         let messageIndex2 = null
//         messages.forEach((element, i) => {
//             if(element.id === +id){
//                 messageIndex2 = i
//             }
//         })
//         messages.splice(messageIndex2, 1)
//         res.status(200).send(messages)
//     }
// }
// }

// let messages = [];
// let id = 0;

// module.exports = {
//   create: (req, res) => {
//     const { text, time } = req.body;
//     messages.push({ id, text, time });
//     id++;
//     res.status(200).send(messages);
//   },

//   read: (req, res) => {
//     res.status(200).send(messages);
//   },

//   update: (req, res) => {
//     const { text } = req.body;
//     const updateID = req.params.id;
//     const messageIndex = messages.findIndex(message => message.id == updateID);
//     let message = messages[messageIndex];

//     messages[messageIndex] = {
//       id: message.id,
//       text: text || message.text,
//       time: message.time
//     };

//     res.status(200).send(messages);
//   },

//   delete: (req, res) => {
//     const deleteID = req.params.id;
//     messageIndex = messages.findIndex(message => message.id == deleteID);
//     messages.splice(messageIndex, 1);
//     res.status(200).send(messages);
//   }
// };