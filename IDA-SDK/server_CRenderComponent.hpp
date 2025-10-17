#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class server_CRenderComponent {
    char pad_770[0x8];
    char vTable3990[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_3991[0x18];
    bool m_bIsRenderingWithViewModels;
    char pad_3992[0x3];
    uint32_t m_nSplitscreenFlags;
    bool m_bEnableRendering;
    char pad_3993[0x4f];
    bool m_bInterpolationReadyToDraw;
    char end_pad_3994[0x7];
};
