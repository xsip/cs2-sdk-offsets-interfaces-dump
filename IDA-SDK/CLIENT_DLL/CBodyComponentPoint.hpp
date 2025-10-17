#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class CGameSceneNode;
#include "CNetworkVarChainer.hpp"
#include "CGameSceneNode.hpp"

class CBodyComponentPoint {
    char pad_207[0x8];
    CGameSceneNode* m_pSceneNode;
    char pad_205[0x38];
    CNetworkVarChainer __m_pChainEntity;
    char end_pad_206[0x8];
    char _vtable_pad_220[0x8];
    CGameSceneNode m_sceneNode;
};
