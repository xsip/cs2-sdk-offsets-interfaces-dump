#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CSoundEnvelope.hpp"
#include "CSoundEnvelope.hpp"
#include "CCopyRecipientFilter.hpp"

class CSoundPatch {
    char _vtable_pad_524[0x8];
    CSoundEnvelope m_pitch;
    CSoundEnvelope m_volume;
    char pad_525[0x14];
    float32 m_shutdownTime;
    float32 m_flLastTime;
    char pad_526[0x4];
    CUtlSymbolLarge m_iszSoundScriptName;
    char m_hEnt[0x4];
    CEntityIndex m_soundEntityIndex;
    Vector m_soundOrigin;
    int32_t m_isPlaying;
    CCopyRecipientFilter m_Filter;
    float32 m_flCloseCaptionDuration;
    bool m_bUpdatedSoundOrigin;
    char pad_527[0x3];
    CUtlSymbolLarge m_iszClassName;
};
