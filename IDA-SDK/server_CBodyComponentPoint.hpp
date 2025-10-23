#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class server_CGameSceneNode;
#include "entity2_CNetworkVarChainer.hpp"
#include "server_CGameSceneNode.hpp"

class server_CBodyComponentPoint {
    char pad_770[0x8];
    server_CGameSceneNode* m_pSceneNode;
    char pad_2993[0x38];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char end_pad_2994[0x8];
    char vTable3014[0x8];
    server_CGameSceneNode m_sceneNode;
};
