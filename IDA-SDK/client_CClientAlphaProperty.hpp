#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class client_CClientAlphaProperty {
    char pad_1692[0x8];
    void **__vftable_0;
    uint16_t m_nDistFadeStart;
    uint16_t m_nDistFadeEnd;
    char pad_1690[0x3];
    uint8_t m_nAlpha;
    float32 m_flFadeScale;
    entity2_GameTime_t m_flRenderFxStartTime;
    float32 m_flRenderFxDuration;
    char end_pad_1691[0xc];
};
