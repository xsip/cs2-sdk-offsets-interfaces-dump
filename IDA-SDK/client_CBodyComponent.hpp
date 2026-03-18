#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class client_CGameSceneNode;
#include "entity2_CNetworkVarChainer.hpp"

class client_CBodyComponent {
    char pad_1556[0x8];
    client_CGameSceneNode* m_pSceneNode;
    char pad_1554[0x38];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char end_pad_1555[0x8];
};
