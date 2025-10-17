#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CNetworkVarChainer.hpp"

class CRenderComponent {
    char pad_207[0x8];
    char _vtable_pad_504[0x8];
    CNetworkVarChainer __m_pChainEntity;
    char pad_505[0x18];
    bool m_bIsRenderingWithViewModels;
    char pad_506[0x3];
    uint32_t m_nSplitscreenFlags;
    bool m_bEnableRendering;
    char pad_507[0x4f];
    bool m_bInterpolationReadyToDraw;
    char end_pad_508[0x27];
};
