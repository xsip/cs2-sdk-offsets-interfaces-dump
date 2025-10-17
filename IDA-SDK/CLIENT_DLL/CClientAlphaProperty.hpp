#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "GameTime_t.hpp"

class CClientAlphaProperty {
    char pad_332[0x8];
    char _vtable_pad_329[0x8];
    uint8_t m_nRenderFX;
    uint8_t m_nRenderMode;
    char pad_330[0x1];
    uint8_t m_nAlpha;
    uint16_t m_nDesyncOffset;
    uint16_t m_nReserved2;
    uint16_t m_nDistFadeStart;
    uint16_t m_nDistFadeEnd;
    float32 m_flFadeScale;
    GameTime_t m_flRenderFxStartTime;
    float32 m_flRenderFxDuration;
    char end_pad_331[0x8];
};
