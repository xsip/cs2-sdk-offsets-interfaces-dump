#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_CNetworkVarChainer.hpp"

class server_CRenderComponent {
    char pad_1557[0x8];
    void **__vftable_0;
    entity2_CNetworkVarChainer __m_pChainEntity;
    char pad_4122[0x18];
    bool m_bIsRenderingWithViewModels;
    char pad_4123[0x3];
    uint32_t m_nSplitscreenFlags;
    bool m_bEnableRendering;
    char pad_4124[0x4f];
    bool m_bInterpolationReadyToDraw;
    char end_pad_4125[0x7];
};
