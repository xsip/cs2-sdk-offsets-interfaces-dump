#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class client_CGameSceneNode;
#include "entity2_CNetworkVarChainer.hpp"
#include "client_CSkeletonInstance.hpp"

class client_CBodyComponentSkeletonInstance {
    char pad_1557[0x8];
    client_CGameSceneNode* m_pSceneNode;
    char pad_1555[0x38];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char end_pad_1556[0x8];
    void **__vftable_0;
    client_CSkeletonInstance m_skeletonInstance;
};
