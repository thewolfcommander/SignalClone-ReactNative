import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://www.seekpng .com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png",
        }}
      />
      {/* chatMessages?.[0]?.photoURL || */}
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          Manoj Tyagi
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          snd s dsd sd j d sd snd s dsd sd j d sd snd s dsd sd j d sd
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
