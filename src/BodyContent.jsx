import ContentRow from "./ContentRow.jsx";
import "./Styles.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const accessKey = "01WFJUqpP0wKDf_7fujND_X0hRGst8wlO1EiWbKNlH0";

const randomKoalaURL = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=koala&count=3`;

const BodyContent = () => {
  const [imageData, setImageData] = useState([]);

  const content = [
    {
      title: "Einführung 1",
      text: "Lorem ipsum dolor sit amet, concus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
      image: imageData[0]?.image ?? "",
      userName: imageData[0]?.name ?? "",
    },
    {
      title: "Einführung 2",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
      image: imageData[1]?.image ?? "",
      userName: imageData[1]?.name ?? "",
    },
    {
      title: "Einführung 3",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mt, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
      image: imageData[2]?.image ?? "",
      userName: imageData[2]?.name ?? "",
    },
  ];

  useEffect(() => {
    if (Object.keys(imageData).length >= 3) return;

    axios.get(randomKoalaURL).then(({ data }) => {
      const imageArray = data.map((image) => ({
        image: image.urls.full,
        name: image.user.name,
      }));
      setImageData(imageArray);
    });
  }, []);

  return (
    <div className="fontMontserrat">
      {content.map((item, index) => (
        <ContentRow
          key={index}
          title={item.title}
          text={item.text}
          image={item.image}
          hideDivider={content.length === index + 1}
          userName={item.userName}
        />
      ))}
    </div>
  );
};

export default BodyContent;
