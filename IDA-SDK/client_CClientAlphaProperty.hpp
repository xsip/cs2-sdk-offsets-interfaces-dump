#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "entity2_GameTime_t.hpp"

class client_CClientAlphaProperty {
    char pad_895[0x8];
    char vTable892[0x8];
    uint8_t m_nRenderFX;
    uint8_t m_nRenderMode;
    char pad_893[0x1];
    uint8_t m_nAlpha;
    uint16_t m_nDesyncOffset;
    uint16_t m_nReserved2;
    uint16_t m_nDistFadeStart;
    uint16_t m_nDistFadeEnd;
    float32 m_flFadeScale;
    entity2_GameTime_t m_flRenderFxStartTime;
    float32 m_flRenderFxDuration;
    char end_pad_894[0x8];
};
