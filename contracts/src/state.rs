use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use cosmwasm_std::Addr;
use cw_storage_plus::Item;

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct State {
    pub agent47: i32,
    pub mission: String,
    pub owner: Addr,
}

pub const STATE: Item<State> = Item::new("state");
