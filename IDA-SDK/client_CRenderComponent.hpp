#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class client_CRenderComponent {
    char pad_1556[0x8];
    void **__vftable_0;
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_1880[0x18];
    bool m_bIsRenderingWithViewModels;
    char pad_1881[0x3];
    uint32_t m_nSplitscreenFlags;
    bool m_bEnableRendering;
    char pad_1882[0x4f];
    bool m_bInterpolationReadyToDraw;
    char end_pad_1883[0x27];
};
