import React from 'react';
import Markdown from 'components/Markdown';
import PageBody from 'components/MenuComponents/PageBody';
import Tabs from './Tabs';

const InfoboxSource = `
  # Faglig 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Sint veniam velit culpa anim laborum ex officia in. Sint eiusmod voluptate fugiat incididunt occaecat Lorem adipisicing cillum. Deserunt amet aliquip occaecat elit veniam nostrud ullamco in culpa.

  Ullamco laboris cillum qui laboris incididunt adipisicing labore fugiat aliqua. In labore reprehenderit ad anim magna ut do ea duis officia do. Duis et esse ullamco excepteur ea nostrud. Sint ad mollit eu elit sit commodo. Exercitation velit est dolor proident velit commodo veniam anim velit officia. Cillum anim proident tempor cillum est officia reprehenderit exercitation ipsum esse sint sint nisi.

  Tempor aliqua laboris reprehenderit deserunt aliquip non. Eiusmod non proident ipsum ea. Laborum eu incididunt ex officia. Duis sint minim nostrud id Lorem qui esse officia Lorem magna Lorem pariatur.

  Reprehenderit fugiat amet Lorem velit aute eiusmod cillum exercitation voluptate nulla irure. Do irure ad minim sint veniam deserunt nisi qui sunt. Eu fugiat voluptate sint amet nisi proident dolore excepteur amet cupidatat aute. In cillum veniam excepteur cillum id magna elit velit ea. Tempor consequat adipisicing dolor eu nisi dolor consequat mollit quis in id sint irure nisi. Non consectetur laborum ex incididunt quis dolor.
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sint veniam velit culpa anim laborum ex officia in. Sint eiusmod voluptate fugiat incididunt occaecat Lorem adipisicing cillum. Deserunt amet aliquip occaecat elit veniam nostrud ullamco in culpa.

Ullamco laboris cillum qui laboris incididunt adipisicing labore fugiat aliqua. In labore reprehenderit ad anim magna ut do ea duis officia do. Duis et esse ullamco excepteur ea nostrud. Sint ad mollit eu elit sit commodo. Exercitation velit est dolor proident velit commodo veniam anim velit officia. Cillum anim proident tempor cillum est officia reprehenderit exercitation ipsum esse sint sint nisi.

Tempor aliqua laboris reprehenderit deserunt aliquip non. Eiusmod non proident ipsum ea. Laborum eu incididunt ex officia. Duis sint minim nostrud id Lorem qui esse officia Lorem magna Lorem pariatur.

Reprehenderit fugiat amet Lorem velit aute eiusmod cillum exercitation voluptate nulla irure. Do irure ad minim sint veniam deserunt nisi qui sunt. Eu fugiat voluptate sint amet nisi proident dolore excepteur amet cupidatat aute. In cillum veniam excepteur cillum id magna elit velit ea. Tempor consequat adipisicing dolor eu nisi dolor consequat mollit quis in id sint irure nisi. Non consectetur laborum ex incididunt quis dolor. 
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sint veniam velit culpa anim laborum ex officia in. Sint eiusmod voluptate fugiat incididunt occaecat Lorem adipisicing cillum. Deserunt amet aliquip occaecat elit veniam nostrud ullamco in culpa.

Ullamco laboris cillum qui laboris incididunt adipisicing labore fugiat aliqua. In labore reprehenderit ad anim magna ut do ea duis officia do. Duis et esse ullamco excepteur ea nostrud. Sint ad mollit eu elit sit commodo. Exercitation velit est dolor proident velit commodo veniam anim velit officia. Cillum anim proident tempor cillum est officia reprehenderit exercitation ipsum esse sint sint nisi.

Tempor aliqua laboris reprehenderit deserunt aliquip non. Eiusmod non proident ipsum ea. Laborum eu incididunt ex officia. Duis sint minim nostrud id Lorem qui esse officia Lorem magna Lorem pariatur.

Reprehenderit fugiat amet Lorem velit aute eiusmod cillum exercitation voluptate nulla irure. Do irure ad minim sint veniam deserunt nisi qui sunt. Eu fugiat voluptate sint amet nisi proident dolore excepteur amet cupidatat aute. In cillum veniam excepteur cillum id magna elit velit ea. Tempor consequat adipisicing dolor eu nisi dolor consequat mollit quis in id sint irure nisi. Non consectetur laborum ex incididunt quis dolor. g
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sint veniam velit culpa anim laborum ex officia in. Sint eiusmod voluptate fugiat incididunt occaecat Lorem adipisicing cillum. Deserunt amet aliquip occaecat elit veniam nostrud ullamco in culpa.

Ullamco laboris cillum qui laboris incididunt adipisicing labore fugiat aliqua. In labore reprehenderit ad anim magna ut do ea duis officia do. Duis et esse ullamco excepteur ea nostrud. Sint ad mollit eu elit sit commodo. Exercitation velit est dolor proident velit commodo veniam anim velit officia. Cillum anim proident tempor cillum est officia reprehenderit exercitation ipsum esse sint sint nisi.

Tempor aliqua laboris reprehenderit deserunt aliquip non. Eiusmod non proident ipsum ea. Laborum eu incididunt ex officia. Duis sint minim nostrud id Lorem qui esse officia Lorem magna Lorem pariatur.

Reprehenderit fugiat amet Lorem velit aute eiusmod cillum exercitation voluptate nulla irure. Do irure ad minim sint veniam deserunt nisi qui sunt. Eu fugiat voluptate sint amet nisi proident dolore excepteur amet cupidatat aute. In cillum veniam excepteur cillum id magna elit velit ea. Tempor consequat adipisicing dolor eu nisi dolor consequat mollit quis in id sint irure nisi. Non consectetur laborum ex incididunt quis dolor. 
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sint veniam velit culpa anim laborum ex officia in. Sint eiusmod voluptate fugiat incididunt occaecat Lorem adipisicing cillum. Deserunt amet aliquip occaecat elit veniam nostrud ullamco in culpa.

Ullamco laboris cillum qui laboris incididunt adipisicing labore fugiat aliqua. In labore reprehenderit ad anim magna ut do ea duis officia do. Duis et esse ullamco excepteur ea nostrud. Sint ad mollit eu elit sit commodo. Exercitation velit est dolor proident velit commodo veniam anim velit officia. Cillum anim proident tempor cillum est officia reprehenderit exercitation ipsum esse sint sint nisi.

Tempor aliqua laboris reprehenderit deserunt aliquip non. Eiusmod non proident ipsum ea. Laborum eu incididunt ex officia. Duis sint minim nostrud id Lorem qui esse officia Lorem magna Lorem pariatur.

Reprehenderit fugiat amet Lorem velit aute eiusmod cillum exercitation voluptate nulla irure. Do irure ad minim sint veniam deserunt nisi qui sunt. Eu fugiat voluptate sint amet nisi proident dolore excepteur amet cupidatat aute. In cillum veniam excepteur cillum id magna elit velit ea. Tempor consequat adipisicing dolor eu nisi dolor consequat mollit quis in id sint irure nisi. Non consectetur laborum ex incididunt quis dolor. 
  `;

const Faglig = () => {
  return (
    <PageBody title="for bedrifter">
      <Tabs />
      <Markdown source={InfoboxSource} />
    </PageBody>
  );
};

export default Faglig;
