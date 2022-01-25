import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import isReact from "is-react";

import * as data from "../../db.json";
import CreatePokemon from "../components/PokemonCreate";
import * as actions from "../redux/actions";

configure({ adapter: new Adapter() });

describe("<PokemonCreate />", () => {
  const state = { pokemons: data.pokemons };
  const mockStore = configureStore([thunk]);
  const { POST_POKEMON } = actions;

  beforeAll(() => expect(isReact.classComponent(CreatePokemon)).toBeFalsy());

  // Si o si vas a tener que usar functional component! No van a correr ninguno de los tests si no lo haces!
  // También fijate que vas a tener que usar algunos hooks. Tanto de React como de Redux!
  // Los hooks de React si o si los tenes que usar "React.useState", "React.useEffect". El test no los reconoce
  // cuando se hace destructuring de estos métodos === test no corren.
  describe("Estructura", () => {
    let createPokemon;
    let store = mockStore(state);
    beforeEach(() => {
      createPokemon = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/pokemons"]}>
            <PokemonCreate />
          </MemoryRouter>
        </Provider>
      );
    });

    it("Debería renderizar un form", () => {
      expect(createPokemon.find("form")).toHaveLength(1);
    });

    it('Debería renderizar un div con el texto "Name: "', () => {
      expect(createPokemon.find("div").at(0).text()).toEqual("Name: ");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "name"', () => {
      expect(createPokemon.find('input[name="name"]')).toHaveLength(1);
    });

    it('Debería renderizar un div con el texto "Life: "', () => {
      expect(createPokemon.find("div").at(1).text()).toEqual("Life: ");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "hp"', () => {
      expect(createPokemon.find('input[name="hp"]')).toHaveLength(1);
    });

    it('Debería renderizar un div con el texto "Attack: "', () => {
      expect(createPokemon.find("div").at(1).text()).toEqual("Attack: ");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "attack"', () => {
      expect(createPokemon.find('input[name="attack"]')).toHaveLength(1);
    });

    it('Debería renderizar un div con el texto "Defense: "', () => {
      expect(createPokemon.find("div").at(1).text()).toEqual("Defense: ");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "defense"', () => {
      expect(createPokemon.find('input[name="defense"]')).toHaveLength(1);
    });

    it('Debería renderizar un div con el texto "Speed: "', () => {
      expect(createPokemon.find("div").at(1).text()).toEqual("Speed: ");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "speed"', () => {
      expect(createPokemon.find('input[name="speed"]')).toHaveLength(1);
    });

    it('Debería renderizar un div con el texto "Height: "', () => {
      expect(createPokemon.find("div").at(1).text()).toEqual("Height: ");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "height"', () => {
      expect(createPokemon.find('input[name="height"]')).toHaveLength(1);
    });

    it('Debería renderizar un div con el texto "Weight: "', () => {
      expect(createPokemon.find("div").at(1).text()).toEqual("Weight: ");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "weight"', () => {
      expect(createPokemon.find('input[name="heiweightght"]')).toHaveLength(1);
    });

    it('Debería renderizar un div con el texto "Image: "', () => {
      expect(createPokemon.find("div").at(2).text()).toEqual("Image: ");
    });

    it('Debería renderizar un input con la propiedad "name" igual a "image"', () => {
      expect(createPokemon.find('input[name="image"]')).toHaveLength(1);
    });

    it('Debería renderizar un button con "type" igual a "submit" y con texto "CREATE POKEMON"', () => {
      expect(createPokemon.find('button[type="submit"]')).toHaveLength(1);
      expect(createPokemon.find("button").at(0).text()).toEqual("CREATE POKEMON");
    });
  });

  describe("Manejo de estados", () => {
    let useState, useStateSpy, createPokemon;
    let store = mockStore(state);
    beforeEach(() => {
      useState = jest.fn();
      useStateSpy = jest.spyOn(React, "useState");
      useStateSpy.mockImplementation((values) => [values, useState]);
      createPokemon = mount(
        <Provider store={store}>
          <PokemonCreate />
        </Provider>
      );
    });

    it("Debería setear correctamente los valores del estado inicial del componente", () => {
      expect(useStateSpy).toHaveBeenCalledWith({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        image: '',
        type: []
      });
    });

    describe("Name input", () => {
      it('Debería cambiar de estado cuando cambie el valor del input "name', () => {
        createPokemon.find('input[name="name"]').simulate("change", {
          target: { name: "name", value: "Pikachu" },
        });
        expect(useState).toHaveBeenCalledWith({
          name: 'Pikachu',
          hp: '',
          attack: '',
          defense: '',
          speed: '',
          height: '',
          weight: '',
          image: '',
          type: []
        });
      });
    });

    describe("Life input", () => {
      it('Debería cambiar de estado cuando cambie el valor del input "hp', () => {
        createPokemon.find('input[name="hp"]').simulate("change", {
          target: { name: "hp", value: "10" },
        });
        expect(useState).toHaveBeenCalledWith({
          name: '',
          hp: '10',
          attack: '',
          defense: '',
          speed: '',
          height: '',
          weight: '',
          image: '',
          type: []
        });
      });
    });

    describe("Attack input", () => {
      it('Debería cambiar de estado cuando cambie el valor del input "attack', () => {
        createPokemon.find('input[name="attack"]').simulate("change", {
          target: { name: "attack", value: "20" },
        });
        expect(useState).toHaveBeenCalledWith({
          name: '',
          hp: '',
          attack: '20',
          defense: '',
          speed: '',
          height: '',
          weight: '',
          image: '',
          type: []
        });
      });
    });

    describe("Defense input", () => {
      it('Debería cambiar de estado cuando cambie el valor del input "defense', () => {
        createPokemon.find('input[name="defense"]').simulate("change", {
          target: { name: "defense", value: "30" },
        });
        expect(useState).toHaveBeenCalledWith({
          name: '',
          hp: '',
          attack: '',
          defense: '30',
          speed: '',
          height: '',
          weight: '',
          image: '',
          type: []
        });
      });
    });

    describe("Speed input", () => {
      it('Debería cambiar de estado cuando cambie el valor del input "speed', () => {
        createPokemon.find('input[name="speed"]').simulate("change", {
          target: { name: "speed", value: "40" },
        });
        expect(useState).toHaveBeenCalledWith({
          name: '',
          hp: '',
          attack: '',
          defense: '',
          speed: '40',
          height: '',
          weight: '',
          image: '',
          type: []
        });
      });
    });

    describe("Height input", () => {
      it('Debería cambiar de estado cuando cambie el valor del input "height', () => {
        createPokemon.find('input[name="height"]').simulate("change", {
          target: { name: "height", value: "50" },
        });
        expect(useState).toHaveBeenCalledWith({
          name: '',
          hp: '',
          attack: '',
          defense: '',
          speed: '',
          height: '50',
          weight: '',
          image: '',
          type: []
        });
      });
    });

    describe("Weight input", () => {
      it('Debería cambiar de estado cuando cambie el valor del input "weight', () => {
        createPokemon.find('input[name="weight"]').simulate("change", {
          target: { name: "weight", value: "60" },
        });
        expect(useState).toHaveBeenCalledWith({
          name: '',
          hp: '',
          attack: '',
          defense: '',
          speed: '',
          height: '',
          weight: '60',
          image: '',
          type: []
        });
      });
    });

  describe("Dispatch to store", () => {
    let createPokemon, useState, useStateSpy;
    let store = mockStore(state);

    beforeEach(() => {
      useState = jest.fn();
      useStateSpy = jest.spyOn(React, "useState");
      useStateSpy.mockImplementation((values) => [values, useState]);
      store = mockStore(state, actions.createPokemonAction);
      store.clearActions();
      createPokemon = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/pokemons"]}>
            <PokemonCreate />
          </MemoryRouter>
        </Provider>
      );
    });

    afterEach(() => jest.restoreAllMocks());

    it('Debería hacer un dispatch al store utilizando la action "createPokemon" con los datos del state cuando se hace un "submit"', () => {
      // Acá deberías usar el hook de Redux "useDispatch" también!
      const createPokemonFn = jest.spyOn(actions, "createPokemon");
      createPokemon
        .find('[type="submit"]')
        .simulate("submit", { preventDefault() {} });
      const expectedAction = [
        {
          payload: {
            name: '',
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            height: '',
            weight: '',
            image: '',
            type: []
            id: 4,
          },
          type: POST_POKEMON,
        },
      ];
      expect(store.getActions()).toEqual(expectedAction);
      expect(CreatePokemon.toString().includes("useDispatch")).toBeTruthy();
      expect(createPokemonFn).toHaveBeenCalled();
    });

    it('Debería llamar al evento "preventDefault" para evitar que se refresque la página luego de hacer un submit', () => {
      const event = { preventDefault: () => {} };
      jest.spyOn(event, "preventDefault");
      createPokemon.find("form").simulate("submit", event);
      expect(event.preventDefault).toBeCalled();
    });
  });
});