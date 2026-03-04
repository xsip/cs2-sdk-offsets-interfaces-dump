#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"

class server_CPulseCell_SoundEventStart {
    void **__vftable_0;
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_512[0x3c];
    server_SoundEventStartType_t m_Type;
    char end_pad_4095[0x4];
};
