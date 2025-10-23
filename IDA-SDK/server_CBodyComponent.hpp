#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class server_CGameSceneNode;
#include "entity2_CNetworkVarChainer.hpp"

class server_CBodyComponent {
    char pad_770[0x8];
    server_CGameSceneNode* m_pSceneNode;
    char pad_2993[0x38];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char end_pad_2994[0x8];
};
