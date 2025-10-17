#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_RenderInputLayoutField_t {
    char m_pSemanticName[32];
    int8_t m_nSemanticIndex;
    char pad_386[0x7];
    int16_t m_nOffset;
    int8_t m_nSlot;
    modellib_RenderSlotType_t m_nSlotType;
    char m_szShaderSemantic[32];
};
