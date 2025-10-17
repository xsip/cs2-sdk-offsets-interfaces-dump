#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class CGameSceneNode;
#include "CNetworkVarChainer.hpp"

class CBodyComponent {
    char pad_207[0x8];
    CGameSceneNode* m_pSceneNode;
    char pad_205[0x38];
    CNetworkVarChainer __m_pChainEntity;
    char end_pad_206[0x8];
};
