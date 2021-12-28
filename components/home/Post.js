import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Entypo, EvilIcons, Feather, FontAwesome5  } from '@expo/vector-icons';


const Post = ({post}) => {
    return (
        <View style={{marginBottom: 10}}>
         <Text  ellipsizeMode='middle' style={{color: "#828282", fontSize: 5,marginHorizontal: 2, marginBottom: 5}} >__________________________________________________________________________________________________________________________________________________________________________________</Text>
            {/* <Divider/>  */}
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{marginHorizontal: 2}}>
                <PostFooter post={post} />
                <Caption post={post} />
                <CommentSection posts={post} />
                <Comments posts={post}/>
            </View>
        </View>
    )
}

const PostHeader = ({post}) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerUserInfo} >
                <TouchableOpacity>
                <Image source={{uri: post.profile_picture}} style={styles.postUserImage} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={{color: "#fff", fontSize: 15,fontWeight: "700"}} >{post.user.toLowerCase()}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
            <Entypo color="white" size={17} name='dots-three-vertical' />
            </TouchableOpacity>
        </View>
    )
}

const PostImage = ({post}) => (
    <View style={styles.postImageContainer}>
        
    <Image
        source={{uri: post.imageURL}}
        style={{height: "100%", resizeMode: "cover", width: "100%" }}
    />
    </View>
)


const PostFooter = ({post}) => (
    <View>
        <View style={styles.footerIconContainer}>
            <View style={styles.rightIcons}>
                <View style={{flexDirection: "column"}}>
                <TouchableOpacity>
                <Feather style={{marginHorizontal: 10}} name="heart" size={24} color="white" />
                </TouchableOpacity>
                </View>
                <TouchableOpacity>
                <FontAwesome5 style={{marginHorizontal: 10}} name="comment" size={24} color="white" />            
                </TouchableOpacity>
                <TouchableOpacity>
                <Entypo style={{marginHorizontal: 10,}} style={styles.icon} name="direction" size={24} color="white" />
                </TouchableOpacity>
            </View>
                <TouchableOpacity>
            <Feather name="bookmark" size={24} color="white" />
                </TouchableOpacity>
        </View>
            <Text thousandSeparator={true} style={{color: "#fff", fontSize: 14, marginHorizontal: 13, fontWeight: '700'}}>{post.likes.toLocaleString("en")} likes</Text>
    </View>
)

const Caption = ({post}) => (
    <View style={{marginTop: 2, marginLeft: 13}}>
    <Text style={{color: "#fff"}} >
    <Text style={{fontWeight: "700", fontSize: 14}}>{post.user.toLowerCase()}</Text>
    <Text style={{fontSize: 13}}> {post.caption}</Text>
    </Text>
    </View>
)

const CommentSection = ({posts}) => (
    <View>
    {/* !!posts return false or true rather than 1 and 0  */}
    {!!posts.comments.length && (
    <Text style={{color: "gray", marginLeft: 13, marginTop: 1}}>
    View {posts.comments.length > 1 ? "all" : ""} {posts.comments.length}{" "}
    {posts.comments.length > 1 ? "comments" : "comment"}
    </Text>
    )}
    </View>
)

const Comments = ({posts}) => (
    <>
        {posts.comments.map((comment, index) => (
            <View style={{marginLeft: 13, flexDirection: "row", marginTop: 2}}>
            <Text numberOfLines={2} ellipsizeMode='tail'>
            <Text style={{color: "#ffff", fontWeight: "700", fontSize: 14}}>{comment.user}</Text>            
            <Text style={{color: "#ffff",fontSize: 13}}> {comment.comment}</Text>            
            </Text>
            </View>
        ))}
    </>
)

export default Post

const styles = StyleSheet.create({
    postUserImage: {
        width:34,
        height: 34,
        // marginLeft: 10,
        marginRight: 10,
        borderWidth: 2.5,
        borderColor: "#ff8501",
        borderRadius: 50,    
    },
    footerIconContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        // marginHorizontal: 2,
        marginVertical: 5,
    },
    rightIcons: {
        flexDirection: "row",
    },
    postImageContainer: {
        width: "100%",
        height: 380,
        marginVertical: 5,
    },
    headerContainer: {
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerUserInfo: {
        flexDirection: "row",
        alignItems: "center",
        // marginHorizontal: 10,
    },

})
