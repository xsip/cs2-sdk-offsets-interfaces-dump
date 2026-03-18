#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "soundsystem_lowlevel_VMixDiffusorDesc_t.hpp"

class soundsystem_lowlevel_CVMixDiffusorProcessorDesc {
    void **__vftable_0;
    CUtlString m_name;
    char pad_619[0x4];
    int32_t m_nChannels;
    float32 m_flxfade;
    char end_pad_620[0x4];
    soundsystem_lowlevel_VMixDiffusorDesc_t m_desc;
};
