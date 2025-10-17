#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class server_CGameSceneNode;
#include "entity2_CNetworkVarChainer.hpp"
#include "server_CSkeletonInstance.hpp"

class server_CBodyComponentSkeletonInstance {
    char pad_770[0x8];
    server_CGameSceneNode* m_pSceneNode;
    char pad_2994[0x38];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char end_pad_2995[0x8];
    char vTable2996[0x8];
    server_CSkeletonInstance m_skeletonInstance;
};
