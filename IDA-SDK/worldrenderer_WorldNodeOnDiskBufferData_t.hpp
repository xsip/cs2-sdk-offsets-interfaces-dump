#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class worldrenderer_WorldNodeOnDiskBufferData_t {
    int32_t m_nElementCount;
    int32_t m_nElementSizeInBytes;
    char m_inputLayoutFields[0x18];
    char m_pData[0x18];
};
