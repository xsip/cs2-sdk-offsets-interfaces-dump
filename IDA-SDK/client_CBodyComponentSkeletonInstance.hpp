#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class client_CGameSceneNode;
#include "entity2_CNetworkVarChainer.hpp"
#include "client_CSkeletonInstance.hpp"

class client_CBodyComponentSkeletonInstance {
    char pad_770[0x8];
    client_CGameSceneNode* m_pSceneNode;
    char pad_768[0x38];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char end_pad_769[0x8];
    char vTable771[0x8];
    client_CSkeletonInstance m_skeletonInstance;
};
