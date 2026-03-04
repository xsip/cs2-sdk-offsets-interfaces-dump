#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class server_CGameSceneNode;
#include "entity2_CNetworkVarChainer.hpp"
#include "server_CSkeletonInstance.hpp"

class server_CBodyComponentBaseModelEntity {
    char pad_1557[0x8];
    server_CGameSceneNode* m_pSceneNode;
    char pad_2973[0x38];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char end_pad_2974[0x8];
    void **__vftable_0;
    server_CSkeletonInstance m_skeletonInstance;
};
