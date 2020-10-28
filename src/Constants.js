import React from "react";
import { SvgIcon } from "@material-ui/core";
// const primary_color = "#DEA754"
const primary_color = "#f59c42";
const gray_color = "#A9AFAD";

function MusicIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M 22.566406 16.210938 C 21.761719 16.210938 21.109375 16.863281 21.109375 17.671875 C 21.109375 17.761719 21.117188 17.851562 21.136719 17.941406 C 20.507812 17.984375 19.699219 17.796875 19.339844 17.589844 C 18.558594 17.148438 18.253906 16.0625 17.984375 15.105469 L 17.941406 14.960938 C 17.777344 14.382812 17.605469 13.789062 17.4375 13.21875 C 17.253906 12.582031 17.0625 11.921875 16.882812 11.285156 C 16.671875 10.539062 16.554688 9.746094 16.445312 8.980469 C 16.363281 8.417969 16.277344 7.839844 16.15625 7.277344 C 16.066406 6.867188 15.949219 6.453125 15.800781 6.046875 C 15.71875 5.425781 15.5625 4.8125 15.28125 4.210938 C 14.75 3.066406 13.808594 1.941406 12.476562 0.871094 C 11.214844 -0.140625 9.105469 -0.0195312 7.644531 0.679688 C 6.621094 1.089844 5.816406 2.09375 5.296875 2.824219 C 5.28125 2.84375 5.265625 2.867188 5.25 2.886719 L 1.726562 2.886719 C 0.773438 2.886719 0 3.65625 0 4.609375 L 0 19.617188 C 0 20.570312 0.773438 21.34375 1.726562 21.34375 L 10.144531 21.34375 C 11.097656 21.34375 11.867188 20.570312 11.867188 19.617188 L 11.867188 4.609375 C 11.867188 3.65625 11.097656 2.886719 10.144531 2.886719 L 6.613281 2.886719 C 6.972656 2.429688 7.40625 1.945312 7.847656 1.695312 C 7.914062 1.65625 7.976562 1.625 8.046875 1.589844 C 8.054688 1.585938 8.0625 1.582031 8.074219 1.582031 C 8.832031 1.304688 9.914062 1.136719 10.621094 1.394531 C 12.015625 1.898438 13.253906 3.519531 13.71875 4.191406 C 14.183594 4.859375 14.558594 5.566406 14.828125 6.289062 C 14.90625 6.960938 14.894531 7.660156 14.863281 8.402344 C 14.8125 9.714844 14.433594 10.980469 14.027344 12.316406 C 13.597656 13.742188 13.15625 15.21875 13.140625 16.769531 C 13.128906 18.128906 13.097656 21.316406 14.546875 22.636719 C 14.984375 23.035156 15.507812 23.234375 16.109375 23.234375 C 16.164062 23.234375 16.21875 23.234375 16.273438 23.230469 C 16.535156 23.628906 16.984375 23.890625 17.496094 23.890625 C 18.300781 23.890625 18.953125 23.238281 18.953125 22.433594 C 18.953125 21.628906 18.300781 20.976562 17.496094 20.976562 C 16.757812 20.976562 16.144531 21.527344 16.050781 22.238281 C 15.726562 22.226562 15.449219 22.117188 15.21875 21.902344 C 14.09375 20.878906 14.125 17.898438 14.136719 16.777344 C 14.148438 15.371094 14.554688 14.027344 14.980469 12.605469 C 15.21875 11.824219 15.457031 11.023438 15.628906 10.210938 C 15.707031 10.660156 15.800781 11.109375 15.925781 11.554688 C 16.105469 12.195312 16.296875 12.855469 16.484375 13.496094 C 16.648438 14.066406 16.820312 14.660156 16.984375 15.234375 L 17.027344 15.375 C 17.332031 16.460938 17.714844 17.808594 18.847656 18.457031 C 19.425781 18.785156 20.753906 19.101562 21.714844 18.851562 C 21.953125 19.027344 22.25 19.128906 22.566406 19.128906 C 23.371094 19.128906 24.023438 18.476562 24.023438 17.671875 C 24.023438 16.863281 23.371094 16.210938 22.566406 16.210938 Z M 6.027344 19.847656 C 4.621094 19.847656 3.476562 18.707031 3.476562 17.300781 C 3.476562 15.894531 4.621094 14.75 6.027344 14.75 C 7.429688 14.75 8.574219 15.894531 8.574219 17.300781 C 8.574219 18.707031 7.429688 19.847656 6.027344 19.847656 Z M 10.007812 4.910156 C 10.121094 4.910156 10.210938 5 10.210938 5.113281 L 10.210938 12.941406 C 10.210938 13.054688 10.121094 13.144531 10.007812 13.144531 L 1.859375 13.144531 C 1.746094 13.144531 1.652344 13.054688 1.652344 12.941406 L 1.652344 5.113281 C 1.652344 5 1.746094 4.910156 1.859375 4.910156 Z M 10.007812 4.910156 " />
      <path d="M 6.027344 15.179688 C 4.855469 15.179688 3.90625 16.132812 3.90625 17.300781 C 3.90625 18.46875 4.855469 19.421875 6.027344 19.421875 C 7.195312 19.421875 8.144531 18.46875 8.144531 17.300781 C 8.144531 16.132812 7.195312 15.179688 6.027344 15.179688 Z M 6.992188 17.382812 L 5.734375 18.296875 C 5.703125 18.316406 5.660156 18.316406 5.628906 18.296875 C 5.597656 18.277344 5.574219 18.246094 5.574219 18.207031 L 5.574219 16.375 C 5.574219 16.339844 5.59375 16.304688 5.628906 16.285156 C 5.644531 16.277344 5.664062 16.269531 5.679688 16.269531 C 5.699219 16.269531 5.71875 16.277344 5.734375 16.285156 L 6.992188 17.199219 C 7.027344 17.21875 7.046875 17.253906 7.046875 17.292969 C 7.046875 17.328125 7.027344 17.363281 6.992188 17.382812 Z M 6.992188 17.382812 " />
    </SvgIcon>
  );
}
function TikTokIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M 12.53125 0.0195312 C 13.839844 0 15.140625 0.0117188 16.441406 0 C 16.519531 1.53125 17.070312 3.089844 18.191406 4.171875 C 19.308594 5.28125 20.890625 5.789062 22.429688 5.960938 L 22.429688 9.988281 C 20.988281 9.941406 19.539062 9.640625 18.230469 9.019531 C 17.660156 8.761719 17.128906 8.429688 16.609375 8.089844 C 16.601562 11.011719 16.621094 13.929688 16.589844 16.839844 C 16.511719 18.238281 16.050781 19.628906 15.238281 20.78125 C 13.929688 22.699219 11.660156 23.949219 9.328125 23.988281 C 7.898438 24.070312 6.46875 23.679688 5.25 22.960938 C 3.230469 21.769531 1.808594 19.589844 1.601562 17.25 C 1.578125 16.75 1.570312 16.25 1.589844 15.761719 C 1.769531 13.859375 2.710938 12.039062 4.171875 10.800781 C 5.828125 9.359375 8.148438 8.671875 10.320312 9.078125 C 10.339844 10.558594 10.28125 12.039062 10.28125 13.519531 C 9.289062 13.199219 8.128906 13.289062 7.261719 13.890625 C 6.628906 14.300781 6.148438 14.929688 5.898438 15.640625 C 5.691406 16.148438 5.75 16.710938 5.761719 17.25 C 6 18.890625 7.578125 20.269531 9.261719 20.121094 C 10.378906 20.109375 11.449219 19.460938 12.03125 18.511719 C 12.21875 18.179688 12.429688 17.839844 12.441406 17.449219 C 12.539062 15.660156 12.5 13.878906 12.511719 12.089844 C 12.519531 8.058594 12.5 4.039062 12.53125 0.0195312 Z M 12.53125 0.0195312 " />
    </SvgIcon>
  );
}
function SpotifyIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M 16.554688 15.539062 C 12.558594 13.691406 6.96875 14.507812 6.734375 14.542969 C 6.207031 14.625 5.84375 15.113281 5.925781 15.640625 C 6.003906 16.167969 6.496094 16.527344 7.019531 16.449219 C 7.074219 16.441406 12.269531 15.679688 15.746094 17.285156 C 15.875 17.347656 16.015625 17.375 16.148438 17.375 C 16.511719 17.375 16.863281 17.167969 17.023438 16.816406 C 17.246094 16.332031 17.035156 15.761719 16.554688 15.539062 Z M 16.554688 15.539062 " />
      <path d="M 17.675781 12.066406 C 13.140625 9.972656 6.78125 10.902344 6.511719 10.941406 C 5.984375 11.019531 5.625 11.511719 5.703125 12.039062 C 5.78125 12.5625 6.273438 12.925781 6.796875 12.847656 C 6.859375 12.835938 12.863281 11.964844 16.867188 13.816406 C 17 13.878906 17.136719 13.90625 17.273438 13.90625 C 17.636719 13.90625 17.984375 13.699219 18.148438 13.347656 C 18.371094 12.863281 18.160156 12.292969 17.675781 12.066406 Z M 17.675781 12.066406 " />
      <path d="M 18.429688 8.445312 C 13.421875 6.128906 6.382812 7.15625 6.085938 7.199219 C 5.5625 7.28125 5.199219 7.769531 5.277344 8.296875 C 5.359375 8.820312 5.847656 9.183594 6.375 9.105469 C 6.441406 9.09375 13.140625 8.121094 17.621094 10.191406 C 17.753906 10.253906 17.890625 10.28125 18.027344 10.28125 C 18.390625 10.28125 18.738281 10.074219 18.902344 9.722656 C 19.125 9.238281 18.914062 8.667969 18.429688 8.445312 Z M 18.429688 8.445312 " />
      <path d="M 12 0 C 5.382812 0 0 5.382812 0 12 C 0 18.617188 5.382812 24 12 24 C 18.617188 24 24 18.617188 24 12 C 24 5.382812 18.617188 0 12 0 Z M 12 22.074219 C 6.445312 22.074219 1.925781 17.554688 1.925781 12 C 1.925781 6.445312 6.445312 1.925781 12 1.925781 C 17.554688 1.925781 22.074219 6.445312 22.074219 12 C 22.074219 17.554688 17.554688 22.074219 12 22.074219 Z M 12 22.074219 " />
    </SvgIcon>
  );
}
function SoundCloudIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M 6 18 L 7.5 18 L 7.5 8.554688 C 6.9375 8.714844 6.429688 9 6 9.382812 C 6 9.382812 6 18 6 18 Z M 3 11.609375 L 3 17.988281 L 3.097656 18 L 4.5 18 L 4.5 11.601562 L 3.097656 11.601562 C 3.097656 11.601562 3 11.609375 3 11.609375 Z M 0 14.796875 C 0 15.960938 0.605469 16.96875 1.5 17.53125 L 1.5 12.070312 C 0.605469 12.632812 0 13.640625 0 14.796875 Z M 9 18 L 10.5 18 L 10.5 8.96875 C 10.050781 8.691406 9.542969 8.507812 9 8.433594 Z M 20.902344 11.601562 L 20.058594 11.601562 C 20.101562 11.339844 20.128906 11.074219 20.128906 10.800781 C 20.128906 8.148438 18.050781 6 15.484375 6 C 14.09375 6 12.851562 6.640625 12 7.644531 L 12 18 L 20.902344 18 C 22.613281 18 24 16.566406 24 14.796875 C 24 13.03125 22.613281 11.601562 20.902344 11.601562 Z M 20.902344 11.601562" />
    </SvgIcon>
  );
}
function InstagramIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M 16.851562 0 L 7.148438 0 C 3.207031 0 0 3.207031 0 7.148438 L 0 16.851562 C 0 20.792969 3.207031 24 7.148438 24 L 16.851562 24 C 20.792969 24 24 20.792969 24 16.851562 L 24 7.148438 C 24 3.207031 20.792969 0 16.851562 0 Z M 21.585938 16.851562 C 21.585938 19.464844 19.464844 21.585938 16.851562 21.585938 L 7.148438 21.585938 C 4.535156 21.585938 2.414062 19.464844 2.414062 16.851562 L 2.414062 7.148438 C 2.414062 4.535156 4.535156 2.414062 7.148438 2.414062 L 16.851562 2.414062 C 19.464844 2.414062 21.585938 4.535156 21.585938 7.148438 Z M 21.585938 16.851562 " />
      <path d="M 12 5.792969 C 8.578125 5.792969 5.792969 8.578125 5.792969 12 C 5.792969 15.421875 8.578125 18.207031 12 18.207031 C 15.421875 18.207031 18.207031 15.421875 18.207031 12 C 18.207031 8.578125 15.421875 5.792969 12 5.792969 Z M 12 15.792969 C 9.90625 15.792969 8.207031 14.09375 8.207031 12 C 8.207031 9.90625 9.90625 8.207031 12 8.207031 C 14.09375 8.207031 15.792969 9.90625 15.792969 12 C 15.792969 14.09375 14.09375 15.792969 12 15.792969 Z M 12 15.792969 " />
      <path d="M 19.707031 5.839844 C 19.707031 6.660156 19.039062 7.328125 18.21875 7.328125 C 17.398438 7.328125 16.730469 6.660156 16.730469 5.839844 C 16.730469 5.019531 17.398438 4.351562 18.21875 4.351562 C 19.039062 4.351562 19.707031 5.019531 19.707031 5.839844 Z M 19.707031 5.839844 " />
    </SvgIcon>
  );
}

const font_size = {
  home_title: 30,
  paragraph: 18,
  caption: 18,
  article: {
    title: 55,
    quote: 25,
  },
};
const font_family = {
  bold: "Rubik-Bold",
  regular: "Rubik-Regular",
  medium: "Rubik-Medium",
};

const about_me_blurb =
  "Hey guys, what's up! My name's Nishant and I'm a music enthusiast who just wants to share with the world the up-and-coming artists I meet! Even though I don’t make music, I’m passionate about the songs I listen to and even more so the artists that make them. \n I’ll be posting my interviews with artists I come across, during which we’ll discuss their musical backgrounds & genres, notable experiences, and other fun topics! Thanks for checking out my site, and be on the lookout for updates! \n If you're an artist who wants to be featured, DM me @melodiesfordays!";
export {
  primary_color,
  font_size,
  font_family,
  about_me_blurb,
  MusicIcon,
  gray_color,
  SoundCloudIcon,
  InstagramIcon,
  SpotifyIcon,
  TikTokIcon,
};
