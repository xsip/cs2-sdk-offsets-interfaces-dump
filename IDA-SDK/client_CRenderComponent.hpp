#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class client_CRenderComponent {
    char pad_770[0x8];
    char vTable1077[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1078[0x18];
    bool m_bIsRenderingWithViewModels;
    char pad_1079[0x3];
    uint32_t m_nSplitscreenFlags;
    bool m_bEnableRendering;
    char pad_1080[0x4f];
    bool m_bInterpolationReadyToDraw;
    char end_pad_1081[0x27];
};
