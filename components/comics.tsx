import { StyleSheet, Text, View, StatusBar, Image, ScrollView, FlatList, Button } from 'react-native'
import React from 'react'


// Create Mock Data for Main Page
//Stories
type buttonProps = {
    
}

const comics = [
  {
    thumb: React.ReactNode;
    title: string;
    episode?: string;
    notif: string;
    button?: <Button></Button>;
  },
  
];

// Posts

const posts = [
  {
    id: "1",
    username: "john_doe",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    postImage:
      "https://images.pexels.com/photos/30237034/pexels-photo-30237034/free-photo-of-chateau-de-le-lude-in-golden-hour.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 120,
    caption: "Enjoying the sunset 🌅 #blessed",
  },
  {
    id: "2",
    username: "alice_smith",
    profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
    postImage:
      "https://images.pexels.com/photos/15062488/pexels-photo-15062488/free-photo-of-snow-near-castle-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 98,
    caption: "Best day ever! ☀️",
  },
];

const MainPage = () => {
  return (
    <View style={styles.container}>
     {/* Header */}
     <View style={styles.header}>
      <Image 
      source={{uri:"https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"}}
      style={styles.logo}
      />
      <Text style={styles.headerText}>Insta Clone</Text>

     </View>

     {/* Stories Section */}

     <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storyContainer}>
      {
        stories.map((story)=>(
          <View key={story.id} style={styles.story}>
            <Image 
            source={{ uri: story.image}}
            style={styles.storyImage}
            />
            <Text style={styles.storyName}>{story.name}</Text>
          </View>
        ))
      }
     </ScrollView>

     {/* Post Section */}
     <FlatList 
     data ={posts}
      keyExtractor={(post) => post.id}
      renderItem={({item})=>(
        <View style={styles.postContainer}>
          <View style={styles.userInfo}>
          {/* user Info */}
          <Image source={{uri:item.profileImage}} style={styles.profileImage} />
          <Text style={styles.userName}>{item.username}</Text>
          </View>
          {/* Post Image */}
          <Image source={{uri:item.postImage}} style={styles.postImage} />
          {/* Likes and Captions */}
          <View style={styles.postDetails}>
            <Text style={styles.likes}>{item.likes} likes</Text>
            <Text style={styles.caption}>
              <Text style={styles.bold}>{item.username}</Text>
              {item.caption}
            </Text>

          </View>
        </View>

        
      )}
     
     />
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({
  
})