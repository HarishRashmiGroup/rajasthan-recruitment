"use client";
import React from "react";
import { Flex, Button, Text, IconButton } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange?: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalCount,
  pageSize,
  //   onPageChange,
}) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  if (totalPages <= 1) return null;

  return (
    <Flex justify="center" align="center" gap={4} mt={8} mb={4}>
      <IconButton
        aria-label="Previous Page"
        // onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="outline"
        colorScheme="blue"
      >
        <ChevronLeft size={20} />
      </IconButton>

      <Flex gap={2} align="center">
        <Text fontSize="sm" fontWeight="medium">
          Page {currentPage} of {totalPages}
        </Text>
      </Flex>

      <IconButton
        aria-label="Next Page"
        // onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="outline"
        colorScheme="blue"
      >
        <ChevronRight size={20} />
      </IconButton>
    </Flex>
  );
};
