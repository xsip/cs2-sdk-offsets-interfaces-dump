#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "client_CSoundEnvelope.hpp"
#include "client_CSoundEnvelope.hpp"
#include "client_CCopyRecipientFilter.hpp"

class client_CSoundPatch {
    char vTable1086[0x8];
    client_CSoundEnvelope m_pitch;
    client_CSoundEnvelope m_volume;
    char pad_1087[0x14];
    float32 m_shutdownTime;
    float32 m_flLastTime;
    char pad_1088[0x4];
    CUtlSymbolLarge m_iszSoundScriptName;
    char m_hEnt[0x4];
    CEntityIndex m_soundEntityIndex;
    Vector m_soundOrigin;
    int32_t m_isPlaying;
    client_CCopyRecipientFilter m_Filter;
    float32 m_flCloseCaptionDuration;
    bool m_bUpdatedSoundOrigin;
    char pad_1089[0x3];
    CUtlSymbolLarge m_iszClassName;
};
