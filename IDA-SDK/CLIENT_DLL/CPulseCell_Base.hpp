#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "PulseDocNodeID_t.hpp"

class CPulseCell_Base {
    char _vtable_pad_493[0x8];
    PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_494[0x3c];
};
