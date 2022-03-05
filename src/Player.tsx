import { FirstPersonControls } from "@react-three/drei";
import { FirstPersonControls as TFirstPersonControls } from "three-stdlib";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { PointerLockControls } from "@react-three/drei";

const SPEED = 5;
const keys = {
  KeyW: "forward",
  KeyS: "backward",
  KeyA: "left",
  KeyD: "right",
  Space: "jump",
};
const moveFieldByKey = (key: keyof typeof keys) => keys[key];
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const rotation = new THREE.Vector3();
const speed = new THREE.Vector3();

const usePlayerControls = () => {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
  });
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) =>
      setMovement((m) => ({
        ...m,
        [moveFieldByKey(e.code as keyof typeof keys)]: true,
      }));
    const handleKeyUp = (e: KeyboardEvent) =>
      setMovement((m) => ({
        ...m,
        [moveFieldByKey(e.code as keyof typeof keys)]: false,
      }));
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return movement;
};

export const Player = () => {
  const { camera } = useThree();
  const controls = useRef<TFirstPersonControls>();
  const { forward, backward, left, right, jump } = usePlayerControls();
  useFrame((state) => {});

  return (
    <>
      {/* @ts-ignore */}
      <FirstPersonControls object={camera} ref={controls} />
      <PointerLockControls />
    </>
  );
};

export default Player;
