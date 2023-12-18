import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet,
        nisi sed volutpat facilisis, tellus purus commodo erat, non sodales
        felis felis in lorem. Praesent tincidunt dolor eu sem malesuada, eu
        elementum metus tincidunt. Nam malesuada est in lorem condimentum
        dictum. Ut et massa dignissim, pretium lorem eget, tristique ex. Morbi
        ornare, nisi cursus tempus vulputate, nulla velit facilisis arcu, eu
        consectetur sapien nulla ut nisl. Vivamus bibendum risus id enim
        tincidunt suscipit. Cras viverra varius mauris, in molestie lacus mattis
        eget. Donec iaculis mattis porta. Praesent auctor velit eu justo lacinia
        mollis. Vivamus mi purus, ullamcorper at lectus sit amet, feugiat
        lacinia purus. Integer id odio a nulla iaculis consectetur quis vel
        lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        aliquet, nisi sed volutpat facilisis, tellus purus commodo erat, non
        sodales felis felis in lorem. Praesent tincidunt dolor eu sem malesuada,
        eu elementum metus tincidunt. Nam malesuada est in lorem condimentum
        dictum. Ut et massa dignissim, pretium lorem eget, tristique ex. Morbi
        ornare, nisi cursus tempus vulputate, nulla velit facilisis arcu, eu
        consectetur sapien nulla ut nisl. Vivamus bibendum risus id enim
        tincidunt suscipit. Cras viverra varius mauris, in molestie lacus mattis
        eget. Donec iaculis mattis porta. Praesent auctor velit eu justo lacinia
        mollis. Vivamus mi purus, ullamcorper at lectus sit amet, feugiat
        lacinia purus. Integer id odio a nulla iaculis consectetur quis vel
        lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        aliquet, nisi sed volutpat facilisis, tellus purus commodo erat, non
        sodales felis felis in lorem. Praesent tincidunt dolor eu sem malesuada,
        eu elementum metus tincidunt. Nam malesuada est in lorem condimentum
        dictum. Ut et massa dignissim, pretium lorem eget, tristique ex. Morbi
        ornare, nisi cursus tempus vulputate, nulla velit facilisis arcu, eu
        consectetur sapien nulla ut nisl. Vivamus bibendum risus id enim
        tincidunt suscipit. Cras viverra varius mauris, in molestie lacus mattis
        eget. Donec iaculis mattis porta. Praesent auctor velit eu justo lacinia
        mollis. Vivamus mi purus, ullamcorper at lectus sit amet, feugiat
        lacinia purus. Integer id odio a nulla iaculis consectetur quis vel
        lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        aliquet, nisi sed volutpat facilisis, tellus purus commodo erat, non
        sodales felis felis in lorem. Praesent tincidunt dolor eu sem malesuada,
        eu elementum metus tincidunt. Nam malesuada est in lorem condimentum
        dictum. Ut et massa dignissim, pretium lorem eget, tristique ex. Morbi
        ornare, nisi cursus tempus vulputate, nulla velit facilisis arcu, eu
        consectetur sapien nulla ut nisl. Vivamus bibendum risus id enim
        tincidunt suscipit. Cras viverra varius mauris, in molestie lacus mattis
        eget. Donec iaculis mattis porta. Praesent auctor velit eu justo lacinia
        mollis. Vivamus mi purus, ullamcorper at lectus sit amet, feugiat
        lacinia purus. Integer id odio a nulla iaculis consectetur quis vel
        lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        aliquet, nisi sed volutpat facilisis, tellus purus commodo erat, non
        sodales felis felis in lorem. Praesent tincidunt dolor eu sem malesuada,
        eu elementum metus tincidunt. Nam malesuada est in lorem condimentum
        dictum. Ut et massa dignissim, pretium lorem eget, tristique ex. Morbi
        ornare, nisi cursus tempus vulputate, nulla velit facilisis arcu, eu
        consectetur sapien nulla ut nisl. Vivamus bibendum risus id enim
        tincidunt suscipit. Cras viverra varius mauris, in molestie lacus mattis
        eget. Donec iaculis mattis porta. Praesent auctor velit eu justo lacinia
        mollis. Vivamus mi purus, ullamcorper at lectus sit amet, feugiat
        lacinia purus. Integer id odio a nulla iaculis consectetur quis vel
        lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        aliquet, nisi sed volutpat facilisis, tellus purus commodo erat, non
        sodales felis felis in lorem. Praesent tincidunt dolor eu sem malesuada,
        eu elementum metus tincidunt. Nam malesuada est in lorem condimentum
        dictum. Ut et massa dignissim, pretium lorem eget, tristique ex. Morbi
        ornare, nisi cursus tempus vulputate, nulla velit facilisis arcu, eu
        consectetur sapien nulla ut nisl. Vivamus bibendum risus id enim
        tincidunt suscipit. Cras viverra varius mauris, in molestie lacus mattis
        eget. Donec iaculis mattis porta. Praesent auctor velit eu justo lacinia
        mollis. Vivamus mi purus, ullamcorper at lectus sit amet, feugiat
        lacinia purus. Integer id odio a nulla iaculis consectetur quis vel
        lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        aliquet, nisi sed volutpat facilisis, tellus purus commodo erat, non
        sodales felis felis in lorem. Praesent tincidunt dolor eu sem malesuada,
        eu elementum metus tincidunt. Nam malesuada est in lorem condimentum
        dictum. Ut et massa dignissim, pretium lorem eget, tristique ex. Morbi
        ornare, nisi cursus tempus vulputate, nulla velit facilisis arcu, eu
        consectetur sapien nulla ut nisl. Vivamus bibendum risus id enim
        tincidunt suscipit. Cras viverra varius mauris, in molestie lacus mattis
        eget. Donec iaculis mattis porta. Praesent auctor velit eu justo lacinia
        mollis. Vivamus mi purus, ullamcorper at lectus sit amet, feugiat
        lacinia purus. Integer id odio a nulla iaculis consectetur quis vel
        lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        aliquet, nisi sed volutpat facilisis, tellus purus commodo erat, non
        sodales felis felis in lorem. Praesent tincidunt dolor eu sem malesuada,
        eu elementum metus tincidunt. Nam malesuada est in lorem condimentum
        dictum. Ut et massa dignissim, pretium lorem eget, tristique ex. Morbi
        ornare, nisi cursus tempus vulputate, nulla velit facilisis arcu, eu
        consectetur sapien nulla ut nisl. Vivamus bibendum risus id enim
        tincidunt suscipit. Cras viverra varius mauris, in molestie lacus mattis
        eget. Donec iaculis mattis porta. Praesent auctor velit eu justo lacinia
        mollis. Vivamus mi purus, ullamcorper at lectus sit amet, feugiat
        lacinia purus. Integer id odio a nulla iaculis consectetur quis vel
        lacus.
      </p>
    </div>
  );
}

export default ModalPage;
