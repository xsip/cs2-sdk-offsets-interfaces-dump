#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "soundsystem_lowlevel_VMixAutoFilterDesc_t.hpp"

class soundsystem_lowlevel_CVMixAutoFilterProcessorDesc {
    void **__vftable_0;
    CUtlString m_name;
    char pad_620[0x4];
    int32_t m_nChannels;
    float32 m_flxfade;
    char end_pad_621[0x4];
    soundsystem_lowlevel_VMixAutoFilterDesc_t m_desc;
    char end_pad_618[0x4];
};
