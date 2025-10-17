#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_voicecontainers_CVSound {
    int32_t m_nRate;
    soundsystem_voicecontainers_CVSoundFormat_t m_nFormat;
    char pad_469[0x3];
    uint32_t m_nChannels;
    int32_t m_nLoopStart;
    uint32_t m_nSampleCount;
    float32 m_flDuration;
    char m_Sentences[0x18];
    uint32_t m_nStreamingSize;
    char pad_470[0x4];
    char m_nSeekTable[0x18];
    int32_t m_nLoopEnd;
    char pad_471[0x4];
    CUtlBinaryBlock m_encodedHeader;
    char end_pad_472[0x10];
};
