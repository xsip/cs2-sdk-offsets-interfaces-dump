#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class client_CRenderComponent {
    char pad_770[0x8];
    char vTable1066[0x8];
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1067[0x18];
    bool m_bIsRenderingWithViewModels;
    char pad_1068[0x3];
    uint32_t m_nSplitscreenFlags;
    bool m_bEnableRendering;
    char pad_1069[0x4f];
    bool m_bInterpolationReadyToDraw;
    char end_pad_1070[0x27];
};
