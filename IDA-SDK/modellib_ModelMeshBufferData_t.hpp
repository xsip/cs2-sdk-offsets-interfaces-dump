#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_ModelMeshBufferData_t {
    int32_t m_nBlockIndex;
    uint32_t m_nElementCount;
    uint32_t m_nElementSizeInBytes;
    bool m_bMeshoptCompressed;
    bool m_bMeshoptIndexSequence;
    bool m_bCompressedZSTD;
    bool m_bCreateBufferSRV;
    bool m_bCreateBufferUAV;
    bool m_bCreateRawBuffer;
    bool m_bCreatePooledBuffer;
    uint8_t m_nBufferUsage;
    char pad_388[0x4];
    char m_inputLayoutFields[0x18];
};
