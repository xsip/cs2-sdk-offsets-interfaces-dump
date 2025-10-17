#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CAnimEventDefinition {
    char vTable422[0x8];
    int32_t m_nFrame;
    int32_t m_nEndFrame;
    float32 m_flCycle;
    float32 m_flDuration;
    KeyValues3 m_EventData;
    CBufferString m_sLegacyOptions;
    CGlobalSymbol m_sEventName;
};
