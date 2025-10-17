#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class CGameSceneNode;
#include "CNetworkVarChainer.hpp"
#include "CSkeletonInstance.hpp"

class CBodyComponentSkeletonInstance {
    char pad_207[0x8];
    CGameSceneNode* m_pSceneNode;
    char pad_205[0x38];
    CNetworkVarChainer __m_pChainEntity;
    char end_pad_206[0x8];
    char _vtable_pad_208[0x8];
    CSkeletonInstance m_skeletonInstance;
};
